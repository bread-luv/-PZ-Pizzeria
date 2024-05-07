import { useEffect, useState } from "react";
import axios from "axios";
import { load } from "cheerio";
import "/src/App.css";
/*
If I had more time this API would be very different. 
This API relies heavily upon the Cheerio library which is an API scrapping library. 
With more time and resources, I would create a proper server-based API that could make the same requests but in a more efficient manner.
This biggest weakness of this API is the reliance on a proxy to make connections to the web server, Cheese.com. 
Since I have built this on my local machine, 
my address is block from making web requests on the site. 
Hence using a proxy was essential, and the same will be required by you for testing purposes. 
To enable the proxy, you just need to visit this site and then the application will be able to make the requests needed. 
https://cors-anywhere.herokuapp.com/corsdemo

The API documentation can be found at SwaggerHub under this link.
https://app.swaggerhub.com/apis/schmidlucat/Test/1.0.0
*/

//This interface is created to import the name of the cheese from App
interface Props {
  children: string;
}

const FetchCheeseData = ({ children }: Props) => {
  //Initialising variables
  const [imageString, setImageString] = useState<string>("");
  const [cheesePrice, setCheesePrice] = useState(4);
  const [cheeseColor, setCheeseColor] = useState<string>("");
  const [cheeseMath, setCheeseMath] = useState<string>("");
  const [finalprice, setFinalPrice] = useState(1.0);
  const [error, setError] = useState<string | null>(null);
  const [cheeseVisible, setCheeseVisibility] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setCheeseVisibility(true);
    setFinalPrice(parseInt(cheeseMath) * cheesePrice);
  };
  useEffect(() => {
    //This function fetchs the needed data
    const fetchData = () => {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.cheese.com/${children
            .toLowerCase()
            .replace(/\s+/g, "-")}/`
        )
        .then((response) => {
          const html = response.data;
          const $ = load(html);

          // Extract the src attribute of the cheese image
          const imageLocation = $(
            "#main-body > div.container > div > div > div > div > div.unit > div.row > div:nth-child(1) > div.cheese-image > div > a > img"
          ).attr("src");
          //The address is the JS address as i couldnt find a shortcut to the image

          // Extract the text content of the cheese color
          const cheeseColor = $(".summary_tint > p")
            .text()
            .trim()
            .replace(/.*:/, "");

          //Stores the new information
          setImageString("https://www.cheese.com" + imageLocation);
          setCheeseColor(cheeseColor);
          setCheesePrice(children.length + 30); //Due to the lack of information on the site I created a fake calculation for the sample site.
        })

        //An error check
        .catch((error) => {
          console.error("Error fetching cheese data:", error);
          setError("An error occurred while fetching cheese data.");
        });
    };

    fetchData();
    setCheeseVisibility(false);
  }, [children]);
  return (
    <div>
      <h3 className="textstyler">Cheese Details</h3>
      <div className="row">
        <div className="column">
          <p className="textstyler">
            This cheese appears as the color: {cheeseColor}
            <div></div>
            This cheese costs on average {cheesePrice} per kilo!
          </p>
          <div className="row"></div>
        </div>
        <img src={imageString} className="logo" alt="Cheese Logo" />
      </div>

      <p className="textstyler">
        Below you can check how much per kilo your selected cheese would cost!
        <div></div>
        Enter the amount of Kilos you'd like to purchase below!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cheeseMath}
          onChange={(e) => setCheeseMath(e.target.value)}
        />
        <input type="submit" />
        {cheeseVisible && (
          <h3 className="textstyler">
            That amount of Cheese would cost, ${finalprice}
          </h3>
        )}
      </form>
    </div>
  );
};

export default FetchCheeseData;
