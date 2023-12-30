import FeaturedJob from "../FeaturedJob/FeaturedJob";
import Banner from "../banner/Banner";
import CategoryList from "../jobCategoryList/CategoryList";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;