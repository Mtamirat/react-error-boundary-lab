function Dashboard() {
    return (
      <div>
        <h2>Social Media Dashboard</h2>
  
        <div
          style={{
            border: "1px solid green",
            padding: "15px",
            marginBottom: "15px"
          }}
        >
          <h3>Profile Stats</h3>
          <p>Followers: 5,230</p>
        </div>
  
        <div
          style={{
            border: "1px solid blue",
            padding: "15px"
          }}
        >
          <h3>Recent Posts</h3>
          <p>New engagement this week.</p>
        </div>
      </div>
    );
  }
  
  export default Dashboard;