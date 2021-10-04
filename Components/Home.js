import React, { useEffect } from "react"
import { Jumbotron,Container,Button } from "reactstrap"

const Home=()=>{
    useEffect(()=>{
        document.title="Home || Learn code with Shubham"
    },[])
    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Learn Code with Shubham</h1>
                <p>Learning Purpose</p>
                <Container>
                    <Button color="primary" outline>Start Using</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home