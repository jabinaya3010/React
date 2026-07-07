function Navbar() {
  return (
    <nav style={{ backgroundColor: "blue", color: "black", padding: "15px" }}>
      <a href="">Home</a><br></br>
      <a href="">About Me</a>
    </nav>
  );
}

function Story() {
  return (
    <div>
      <h2>Story</h2>
      <p>
        My name is Abinaya. I am learning React JS and my goal is to become a
        Full Stack Developer.
      </p>
    </div>
  );
}

function Form() {
  return (
    <div>
      <h2>Registration Form</h2>

      <form>
        <input type="text" placeholder="Enter Name" /><br /><br />
        <input type="email" placeholder="Enter Email" /><br /><br />
        <input type="password" placeholder="Enter Password" /><br /><br />

        <button>Submit</button>
      </form>
    </div>
  );
}

function Table() {
  return (
    <div>
      <h2>Student Details</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Abinaya</td>
            <td>React</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Priya</td>
            <td>Java</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Ravi</td>
            <td>Python</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Card() {
  return (
    <>
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "20px",
      }}>
      <div
      style={{
        width: "250px",
        border: "1px solid black",
        padding: "15px",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    >
      <img
        src="https://via.placeholder.com/250"
        alt="Card"
        width="100%"
      />

      <h3>React Card</h3>

      <p>This is a simple card component.</p>

      <button>Read More</button>
    </div><div
      style={{
        width: "250px",
        border: "1px solid black",
        padding: "15px",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    >
      <img
        src="https://via.placeholder.com/250"
        alt="Card"
        width="100%"
      />

      <h3>React Card</h3>

      <p>This is a simple card component.</p>

      <button>Read More</button>
    </div><div
      style={{
        width: "250px",
        border: "1px solid black",
        padding: "15px",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    >
      <img
        src="https://via.placeholder.com/250"
        alt="Card"
        width="100%"
      />

      <h3>React Card</h3>

      <p>This is a simple card component.</p>

      <button>Read More</button>
    </div>
    </div>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Story />
      <Form />
      <Table />
      <Card />
    </>
  );
}

export default App;
