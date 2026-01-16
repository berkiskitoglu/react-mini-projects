import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded className="mb-5">
          <GoBell className="mr-1" />
          Click Me
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See deal
        </Button>
      </div>
      <div>
        <Button warning>Hide ads</Button>
      </div>
      <div>
        <Button danger>Something</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
