import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";

const employees = [
  { id: 1, name: "Sai" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Priya" }
];

function Home() {
  return (
    <div>
      <h1>Employee Details</h1>
      {employees.map((emp) => (
        <h3 key={emp.id}>
          <Link to={`/employees/${emp.id}`}>
            {emp.name}
          </Link>
        </h3>
      ))}
    </div>
  );
}

function Details() {
  const { id } = useParams();
  const employee = employees.find(emp => emp.id === Number(id));

  return (
    <div>
      <h1>Employee Information</h1>
      {employee ? (
        <>
          <h2>Name: {employee.name}</h2>
          <h2>Employee ID: {employee.id}</h2>
        </>
      ) : (
        <h2>Employee Not Found</h2>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;