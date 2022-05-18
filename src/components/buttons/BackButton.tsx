import { ArrowLeftCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/posts");
  };
  return (
    <div>
      <ArrowLeftCircle
        type="button"
        className="h1 text-success"
        onClick={handleBackButton}
        href="#"
      />
    </div>
  );
}
