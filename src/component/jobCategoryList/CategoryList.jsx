import { useEffect, useState } from "react";


const CategoryList = () => {
    const [categories, setCategories]= useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="text-center max-w-7xl mx-auto my-20 ">
            <h3 className="text-5xl font-bold">Job Category List</h3>
            <p className="font-medium text-[#757575] my-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className="text-left p-5 grid grid-cols-4 gap-4">
                {
                    categories.map(category => <div key={category.id}
                    className="space-y-4 p-5 banner rounded-lg">
                        <img src={category.logo} alt="" />
                        <h3 className="text-2xl font-semibold">{category.category_name}</h3>
                        <p className="text-[#757575]">{category.availability}</p>

                    </div>)
                }
           </div>
        </div>
    );
};

export default CategoryList;