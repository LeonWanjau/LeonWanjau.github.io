import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    //window.scrollTo(0, 0);
    if(pathname=='/' || pathname=='/WombatCoffeeRoasters' || pathname=='/Ink'){
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }, [pathname]);

  return null;
}
