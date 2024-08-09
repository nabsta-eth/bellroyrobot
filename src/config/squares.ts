import watchStrap1 from "../assets/images/WatchStrap1.png";
import logo from "../assets/images/BellroyLogo.png";
import pouch1 from "../assets/images/Pouch1.png";
import wallet1 from "../assets/images/Wallet1.png";
import folio1 from "../assets/images/Folio1.png";
import liteSling1 from "../assets/images/LiteSling1.png";
import liteCoolerTote1 from "../assets/images/LiteCoolerTote1.png";
import venturePouch1 from "../assets/images/VenturePouch1.png";
import iPhoneCardCase1 from "../assets/images/iPhoneCardCase1.png";
import pencilCase1 from "../assets/images/PencilCase1.png";
import toiletryKit1 from "../assets/images/ToiletryKit1.png";
import podJacketPro1 from "../assets/images/PodJacketPro1.png";
import keyCover1 from "../assets/images/KeyCover1.png";
import transitWorkBag1 from "../assets/images/TransitWorkBag1.png";

export type SquareType = {
  img: any;
  name: string;
  url?: string;
}
export const SQUARES: SquareType[] = [
  {
    name: "Watch Strap",
    img: watchStrap1,
    url: "https://bellroy.com/products/watch-strap",
  },
  {
    name: "Logo",
    img: logo,
    url: "https://bellroy.com",
  },
  {
    name: "Pouch",
    img: pouch1,
    url: "https://bellroy.com/products/city-pouch",
  },
  {
    name: "Logo",
    img: logo,
    url: "https://bellroy.com",
  },
  {
    name: "Wallet",
    img: wallet1,
    url: "https://bellroy.com/products/travel-folio",
  },
  {
    name: "Logo",
    img: logo,
    url: "https://bellroy.com",
  },
  {
    name: "Folio",
    img: folio1,
    url: "https://bellroy.com/products/work-folio-a4",
  },
  {
    name: "Logo",
    img: logo,
    url: "https://bellroy.com",
  },
  {
    name: "Lite Sling",
    img: liteSling1,
    url: "https://bellroy.com/products/lite-sling",
  },
  {
    name: "Logo",
    img: logo,
    url: "https://bellroy.com",
  },
  {
    name: "Lite Cooler Tote",
    img: liteCoolerTote1,
    url: "https://bellroy.com/products/lite-cooler-tote",
  },
  {
    name: "Logo",
    img: logo,
    url: "https://bellroy.com",
  },
  {
    name: "Venture Pouch",
    img: venturePouch1,
    url: "https://bellroy.com/products/venture-pouch",
  },
  {
    name: "Logo",
    img: logo,
    url: "https://bellroy.com",
  },
  {
    name: "iPhone Card Case",
    img: iPhoneCardCase1,
    url: "https://bellroy.com/products/iphone-case-3-card",
  },
  {
    name: "Logo",
    img: logo,
    url: "https://bellroy.com",
  },
  {
    name: "Pencil Case",
    img: pencilCase1,
    url: "https://bellroy.com/products/pencil-case",
  },
  {
    name: "Logo",
    img: logo,
    url: "https://bellroy.com",
  },
  {
    name: "Toiletry Kit",
    img: toiletryKit1,
    url: "https://bellroy.com/products/toiletry-kit",
  },
  {
    name: "Logo",
    img: logo,
    url: "https://bellroy.com",
  },
  {
    name: "Pod Jacket Pro",
    img: podJacketPro1,
    url: "https://bellroy.com/products/pod-jacket-pro",
  },
  {
    name: "Logo",
    img: logo,
    url: "https://bellroy.com",
  },
  {
    name: "Key Cover",
    img: keyCover1,
    url: "https://bellroy.com/products/key-cover",
  },
  {
    name: "Logo",
    img: logo,
    url: "https://bellroy.com",
  },
  {
    name: "Transit Work Bag",
    img: transitWorkBag1,
    url: "https://bellroy.com/products/transit-workpack",
  },
];

export const rowLength = Math.ceil(Math.sqrt(SQUARES.length));
