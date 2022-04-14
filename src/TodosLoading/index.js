import React from "react";
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
    <p className="LoadingTodo-text">Mi estimado🧐 estamos cargando, no entres en desesperación...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>    
    );
}

export { TodosLoading };