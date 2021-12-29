


const Progressbar = ({title, pct, subtitle=""}) =>  {
    return (
        <>
            <div className="progress-container progress-primary">
                <span className="progress-badge">{title}</span>
                <span className="progress-sub">{subtitle}</span>
                <div className="progress">
                    <div className="progress-bar progress-bar-primary aos-init aos-animate" 
                        data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" 
                        role="progressbar" aria-valuenow="60" aria-valuemin="0" 
                        aria-valuemax="100" style={{width:pct}}>

                    </div>
                
                </div>
                <span className="progress-value">{pct}</span>
            </div>
        </>
    )
}

Progressbar.defaultProps = {
    title: 'HTML',
    pct: '40%',
  }
export default Progressbar

