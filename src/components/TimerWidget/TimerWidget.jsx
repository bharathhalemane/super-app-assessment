import styles from "./TimerWidget.module.css"
import { useEffect, useRef, useState } from "react"

const TimerWidget = () => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const [timeLeft, setTimeLeft] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    const intervalRef = useRef(null)
    const initialTimeRef = useRef(0)

    const totalSeconds = hours * 3600 + minutes * 60 + seconds

    const formatTime = (total) => {
        const hrs = Math.floor(total / 3600)
        const mins = Math.floor((total % 3600) / 60)
        const secs = total % 60

        return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
    }

    const startTimer = () => {
        if (totalSeconds <= 0) return

        initialTimeRef.current = totalSeconds
        setTimeLeft(totalSeconds)
        setIsRunning(true)
        setIsPaused(false)
    }

    const pauseTimer = () => {
        clearInterval(intervalRef.current)
        setIsRunning(false)
        setIsPaused(true)
    }
    const resumeTimer = () => {
        setIsRunning(true);
        setIsPaused(false);
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);

        setTimeLeft(initialTimeRef.current);
        setIsRunning(false);
        setIsPaused(false);
    };

    const progress = initialTimeRef.current > 0 ? (timeLeft / initialTimeRef.current) * 100
        : 100

    const circumference = 2 * Math.PI * 70
    const strokeDashoffset = circumference - (progress / 100) * circumference

    useEffect(() => {
        if (!isRunning) return

        intervalRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0) {
                    clearInterval(intervalRef.current)
                    setIsRunning(false)
                    setIsPaused(false)

                    alert("Time's Up!")

                    window.dispatchEvent(
                        new CustomEvent("timerFinished")
                    )

                    return 0;
                }

                return prev - 1
            })
        }, 1000)
        return () => clearInterval(intervalRef.current)
    }, [isRunning])

    const increase = (type) => {
        if (isRunning) return

        if (type === "hours") setHours((prev) => (prev + 1) % 24)
        if (type === "minutes") setMinutes((prev) => (prev + 1) % 60)
        if (type === "seconds") setSeconds((prev) => (prev + 1) % 60)
    }

    const decrease = (type) => {
        if (isRunning) return

        if (type === "hours") setHours((prev) => (prev - 1 + 24) % 24)
        if (type === "minutes") setMinutes((prev) => (prev - 1 + 60) % 60)
        if (type === "seconds") setSeconds((prev) => (prev - 1 + 60) % 60)
    }

    return (
        <div className={styles.container}>
            <div className={styles.circleContainer}>
                <svg className={styles.progressRing} width="180" height="180">
                    <circle className={styles.track}
                        strokeWidth="8"
                        fill="transparent"
                        r="70"
                        cx="90"
                        cy="90"
                    />

                    <circle className={styles.progress}
                        strokeWidth="8"
                        fill="transparent"
                        r="70"
                        cx="90"
                        cy="90"
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset
                        }}
                    />
                </svg>
                <div className={styles.timerText}>
                    {
                        isRunning || isPaused ? formatTime(timeLeft) : formatTime(totalSeconds)
                    }
                </div>
            </div>

            <div className={styles.controls}>
                <div className={styles.timerControls}>
                    {[
                        { label: "Hours", value: hours, type: "hours" },
                        { label: "Minutes", value: minutes, type: "minutes" },
                        { label: "Seconds", value: seconds, type: "seconds" }
                    ].map((item) => (
                        <div key={item.type} className={styles.timeColumn}>
                            <p>{item.label}</p>

                            <button onClick={() => increase(item.type)} disabled={isRunning}><svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8779 1.12325L1.14451 10.8566C-0.0409617 12.0421 -0.305509 13.3985 0.350868 14.9259C1.00724 16.4533 2.17649 17.2182 3.85862 17.2207H23.1381C24.8227 17.2207 25.9932 16.4558 26.6496 14.9259C27.306 13.396 27.0402 12.0396 25.8522 10.8566L16.1189 1.12325C15.7445 0.748894 15.339 0.468126 14.9022 0.280947C14.4655 0.0937672 13.9975 0.000173569 13.4984 0.000173569C12.9992 0.000173569 12.5313 0.0937672 12.0945 0.280947C11.6578 0.468126 11.2522 0.748894 10.8779 1.12325Z" fill="#949494" />
                            </svg>
                            </button>
                            <h2>{String(item.value).padStart(2, "0")}</h2>
                            <button onClick={() => decrease(item.type)} disabled={isRunning}>
                                <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8779 16.0975L1.14451 6.36411C-0.0409617 5.17864 -0.305509 3.82221 0.350868 2.29482C1.00724 0.767436 2.17649 0.00249573 3.85862 0H23.1381C24.8227 0 25.9932 0.764941 26.6496 2.29482C27.306 3.8247 27.0402 5.18113 25.8522 6.36411L16.1189 16.0975C15.7445 16.4718 15.339 16.7526 14.9022 16.9398C14.4655 17.1269 13.9975 17.2205 13.4984 17.2205C12.9992 17.2205 12.5313 17.1269 12.0945 16.9398C11.6578 16.7526 11.2522 16.4718 10.8779 16.0975Z" fill="#949494" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                {
                    !isRunning && !isPaused && (
                        <button className={styles.mainBtn} onClick={startTimer}>Start</button>
                    )
                }

                {isRunning && (
                    <div className={styles.actionBtns}>
                        <button className={styles.pauseBtn} onClick={pauseTimer}>Pause</button>
                        <button className={styles.stopBtn} onClick={stopTimer}>Stop</button>
                    </div>
                )}

                {
                    isPaused && (
                        <div className={styles.actionBtns}>
                            <button className={styles.resumeBtn} onClick={resumeTimer}>Resume</button>
                            <button className={styles.stopBtn} onClick={stopTimer}>Stop</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default TimerWidget 