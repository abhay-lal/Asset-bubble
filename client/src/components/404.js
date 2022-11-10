export default function () {
    return (
        <div style={
            {
                height: 100+"vh",
                position: "relative",
                backgroundColor: "#150f1e"
            }
        }>
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(${-50}%, ${-50}%)`,
                borderRadius: "50%",
                height: "20rem",
                width: "20rem",
                textAlign: "center",
                fontSize: "5rem",
                backgroundColor: "#251B37",
                boxShadow: "0 0 12px #70A3A4FF"
            }}>
                <div style={
                    {
                        margin: "50% 0",
                        transform: `translateY(${-50}%`,
                        color: "#70A3A4FF"
                    }
                }>404</div>
            </div>
        </div>
    )
}