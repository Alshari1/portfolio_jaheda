import Portfolio from "../../Portfolio/Portfolio";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import TopNav from "../TopNav/TopNav";

const Main = ({handleSideNav}) => {
    return (
        <div  className="border flex-1 md:flex-1">
            <TopNav handleSideNav={handleSideNav}></TopNav>
            <Banner></Banner>
            <SectionTitle title1={'Features'} tittle2={'What I Do'}></SectionTitle>
            <Features></Features>
            <SectionTitle title1={'Visit my portfolio and keep your feedback'} tittle2={'My Portfolio'}></SectionTitle>
            <Portfolio></Portfolio>
            <SectionTitle title1={'Popular Clients'} tittle2={'Awesome Clients'}></SectionTitle>
        </div>
    );
};

export default Main;