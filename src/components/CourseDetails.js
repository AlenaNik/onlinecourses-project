import React, {useContext} from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import '../components-styling/CourseDetails.scss'
import Button from "./Button"
import CourseContext from '../context/CourseContext'


    const CourseDetails = () => {
    const context = useContext(CourseContext);
    return (
        <div className="video-wrapper">
            <Button className="btn-primary"
                    handleClick={() => context.changeStatus(context.courseProgress === 'on-going' ? 'finished' : 'on-going')}
            >{context.courseProgress === 'on-going' ? 'Start the chapter' : 'Finish the chapter' }</Button>
            <Button className={`${context.courseProgress === 'on-going' ? 'btn-small-invisible ' : 'btn-small-active'}`}> {context.courseProgress === 'on-going' ? '' : 'You just started a new chapter' } </Button>
            <Link to="/"> <p className="message-status"> {context.courseProgress === 'on-going' ? 'Go to the course overview page' : 'Attend this video and take notes' } </p> </Link>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
                <Button className="btn-primary">
                    Next Chapter
                </Button>
        </div>
    )
}

export default CourseDetails
