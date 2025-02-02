export default function Competences() {
    const competences = [
        {HTML5: 90},
        {CSS3: 80},
        {Javascript: 70},
        {PHP: 60},
        {React: 50},
    ]

    const bootstrapColors = ['danger', 'info', 'warning', 'success', 'primary'];

    return (
        <ul>
            {competences.map(function (competence, index) {
                const key = Object.keys(competence)[0];
                const value = competence[key];
                return (
                    <div>
                        <p key={index}>{key} {value}%</p>
                        <div className="progress">
                            <div className={`progress-bar bg-${bootstrapColors[index%bootstrapColors.length]}`} style={{width: `${value}%`}}></div>
                        </div>
                    </div>
                )
            })}
        </ul>
    );
}