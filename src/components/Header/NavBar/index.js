import { PromotionHeader } from "../NavBar/Promotion";
import { SearchBarHeader } from "../NavBar/SearchBar";
import Logo from "../../../assets/img/group-35.png";
import style from "./navBar.module.scss";
import { MenuItems } from "./MenuItems";
import { TopicHeader } from "./Topic";

export const NavBarHeader = () => {
  return (
    <>
      <PromotionHeader />
      <section className={style.sectionNavBar}>
        <div className={style.container}>
          <img className={style.logo} src={Logo} alt="Logo vtex" />
          <SearchBarHeader />
        </div>
        {MenuItems.map((item) => {
          return (
            <span className={style.containerMenu} key={item.id}>
              <img className={style.iconMenu} src={item.src} alt={item.alt} />
            </span>
          );
        })}
      </section>
      <TopicHeader />
    </>
  );
};
