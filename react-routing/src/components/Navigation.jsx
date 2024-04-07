import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}
