import MyExperience from "../../MyExperience/MyExperience";
import MySkill from "../../MySkill/MySkill";
import Portfolio from "../../Portfolio/Portfolio";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import MyEducaion from "../MyEducaion/MyEducaion";
import Review from "../Review/Review";
import TopNav from "../TopNav/TopNav";

const Main = ({ handleSideNav }) => {
    return (
        <div className="flex-1 md:flex-1">
            <TopNav handleSideNav={handleSideNav}></TopNav>
            <Banner></Banner>
            <SectionTitle title1={'Features'} tittle2={'What I Do'}></SectionTitle>
            <Features></Features>
            <SectionTitle title1={'Review'} tittle2={'Review from Client'}></SectionTitle>
            <Review></Review>
            <SectionTitle title1={'Visit my portfolio and keep your feedback'} tittle2={'My Portfolio'}></SectionTitle>
            <Portfolio></Portfolio>
            <SectionTitle title1={'7+ Years of Experience'} tittle2={'My Resume'}></SectionTitle>
            <MySkill></MySkill>
            <div className="flex gap-2 flex-col md:flex-row lg:flex-row">
                <MyExperience></MyExperience>
                <MyEducaion></MyEducaion>
            </div>
        </div>
    );
};

export default Main;