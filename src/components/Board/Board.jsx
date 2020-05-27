import React from 'react';
import Category from '../Category/Category';
import Card from '../Card/Card';
import './Board.css';

const Board = ({ boardQuestions }) => {
    const categories = Object.keys(boardQuestions);
    const categoryQuestions = Object.values(boardQuestions);
    console.log('categories', categories);
    console.log('categoryQuestions', categoryQuestions);
    return (
       <div className="boardContainer">
           <div className="categories">
                {categories.map((category, idx) => 
                    <Category 
                        title={category}
                        categoryQuestions={categoryQuestions[idx]}
                    />
                )}
           </div>
       </div> 
    );
};

export default Board;