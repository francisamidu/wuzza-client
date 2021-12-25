import MdMale from "react-ionicons/lib/MdMan";
import MdPower from "react-ionicons/lib/MdPower";
import MdSettings from "react-ionicons/lib/MdSettings";
import MdHome from 'react-ionicons/lib/MdHome'
import MdPaper from 'react-ionicons/lib/MdPaper'
import MdCalendar from 'react-ionicons/lib/MdCalendar'
import MdCash from 'react-ionicons/lib/MdCash'
import MdBook from 'react-ionicons/lib/MdBook'
import MdClipboard from "react-ionicons/lib/MdClipboard"
const displayIcon = icon => {
  switch (icon) {
    case 'book':
      return <MdBook fontSize="20px" />;
    case 'calendar':
      return <MdCalendar fontSize="20px" />
    case 'cash':
      return <MdCash fontSize="20px" />
    case 'clipboard':
      return <MdClipboard fontSize="20px" />
    case 'home':
      return <MdHome fontSize="20px" />
    case "logout":
      return <MdPower fontSize="20px" />;
    case 'paper':
      return <MdPaper fontSiz="20px" />
    case "user":
      return <MdMale fontSize="20px" />;
    case "settings":
      return <MdSettings fontSize="20px" />;
    default:
      return null;
  }
};

export default displayIcon