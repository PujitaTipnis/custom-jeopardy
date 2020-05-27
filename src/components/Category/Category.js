import React from 'react';
import Card from '../Card/Card';
import './Category.css';

const Category = ({ title, categoryQuestions }) => {
    console.log('Category categoryQuestions', categoryQuestions);
    return (
       <div className="categoryContainer">
           <h4>{title}</h4>
           {categoryQuestions.map(categoryQuestion =>
                <Card title={title} {...categoryQuestion} />
            )}
       </div> 
    );
};

export default Category;