
import Meta from "../components/Meta"
import Progressbar from "../components/Progressbar"

const professional_skills = () =>  {
    return (
        <>
          <Meta title={"Professional Skills"}/>
          <div className="container mt-3" id="middlecontent">
            <h2>Professional Skills</h2> 
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <Progressbar title={"PYTHON"} pct="90%" subtitle={" ( Django, Flask, FastAPI, Plotly, Dash, Streamlit )"}/>
                        </div>
                        <div className="col-md-6">
                            <Progressbar title={"Data Visualisation"} pct="90%" subtitle={" ( D3.js, Dc.js, Plotly, Dash, Streamlit, PowerBI, Tableau )"}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Progressbar title={"JAVASCRIPT"} pct="80%" subtitle={" ( JS, Jquery )"}/>
                        </div>
                        <div className="col-md-6">
                            <Progressbar title={"HTML, CSS"} pct="80%" subtitle={""}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Progressbar title={"LINUX"} pct="70%" subtitle={" ( Ubuntu, CentOs, Red Hat )"}/>
                        </div>
                        <div className="col-md-6">
                            <Progressbar title={"NODE JS"} pct="80%" subtitle={" ( Express, Fastify )"}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Progressbar title={"Databases"} pct="70%" subtitle={" ( Mysql, SQL Server, Postgressql, Firebase, Mongodb )"}/>
                        </div>
                        <div className="col-md-6">
                            <Progressbar title={"REACT"} pct="80%" subtitle={""}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Progressbar title={"NextJs"} pct="60%" subtitle={""}/>
                        </div>
                        <div className="col-md-6">
                            <Progressbar title={"GIT"} pct="90%" subtitle={""}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Progressbar title={"Data Science"} pct="50%" subtitle={" ( Pandas, NumPy, SciPy, Matplotlib, Scikit-learn, NLP, ML )"}/>
                        </div>
                        <div className="col-md-6">
                            <Progressbar title={"PySpark"} pct="30%" subtitle={""}/>
                        </div>
                    </div>
                    
                </div>
            </div>
          </div>
         
        </>
    )
}

export default professional_skills

