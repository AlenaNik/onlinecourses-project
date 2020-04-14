import React from 'react'
import '../components-styling/Card.scss'
import Button from "./Button"

export const Card = ({ img, title, name, avatar, className, children }) => {
    return (
        <div className="card-wrapper">
            <div className="course-section">
                <img src={img} alt="illustration"/>
                <span className="category-title"> Course - Onboarding </span>
                <p className="course-title">{title}</p>
                <Button className={className}>{children}</Button>
            </div>
            <div className="lesson-section">
                <img src={avatar} alt="teacher"/>
                <div className="naming">
                    <span className="name">{name}</span>
                    <span className="lessons-info">17 lessons - 62m</span>
                </div>
            </div>
        </div>
    )
}
