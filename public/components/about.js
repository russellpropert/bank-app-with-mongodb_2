function About() {
  return (
    <div>
      <h2>About This Project</h2>
      <div className="card" style={{maxWidth: "800px"}}>
        <div className="card-body">
          <h5 className="card-title">Bank App With MongoDB</h5>
          <p className="card-text">
            This project was created for the MIT xPRO Professional Certificate in Coding:
            Full Stack Development with MERN program. This application demonstrates setting
            up a front end that communicates with an Express server. The server uses a MongoDB
            database to hold user account data.
          </p>

          <h6>Technology Used:</h6>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>MongoDB</li>
          </ul>

          <h6>Features</h6>
          <p className="card-text">
            This app features inserting, reading, and updating data in a MongoDB database.
          </p>

          <h6>License</h6>
          <p className="card-text">
            MIT License - Copyright (c) 2021 Russell Propert
          </p>
        </div>
      </div>
    </div>
  );
}
