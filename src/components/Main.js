import React, {useContext} from 'react'
import '../components-styling/Main.scss'
import { Icon } from './Icon.decoration'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import checklist from '../assets/img/Checklist.svg'
import graph from '../assets/img/Graph.svg'
import user from '../assets/img/Book.svg'
import Button from "./Button";
import CourseContext from '../context/CourseContext'
import AuthContext from '../context/AuthContext'

const Main = () => {
    const context = useContext(CourseContext);
    const authUser = useContext(AuthContext)

    return (
        <>
            <div className="wrapper">
                <div className="main-illustration">
                    <Icon/>
                </div>
                <div className="section-one">
                    <h1>Onboarding for {authUser.user.name}</h1>
                    <h2> Video tutorials 100% online, part-time & self-paced. </h2>
                    <Link to="/details">
                        <Button className="btn-primary">
                            Resume Course
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="section-two">
                {/*I would normally loop throught data here!*/}
                <Card
                    img={user}
                    name={'Eva Porcello'}
                    title={'Gründer Dr. Stefan Frädrich'}
                    avatar={'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'}
                    className={'btn-small-disabled'}>Coming soon</Card>
                  <Link to="/details">
                    <Card
                    img={checklist}
                    name={'Tyler Precht'}
                    title={'Welcome to the team!'}
                    avatar={'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1030&q=80'}
                    className={`${context.courseProgress === 'on-going' ? 'btn-small' : 'btn-small-visited'}`}>{context.courseProgress === 'on-going' ? 'start the course' : 'continue watching' }</Card>
                  </Link>
                    <Card
                    img={graph}
                    name={'Jessica Menendez'}
                    title={'History, Status Quo & Future plans of Gedankentanken '}
                    avatar={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'}
                    className={'btn-small-active'}>Important</Card>
            </div>
        </>
    )
}

export default Main
