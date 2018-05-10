import React from 'react'
import gql from "graphql-tag"
import { client } from './PrismaEndPoint/EndPoint'

import Template from './99-Template'


export default class extends React.Component{
    state = { Apartment: [] }

    render(){

        const loadApartment = async () => {
            let temp1 = await client.query({
                query: gql`
                    query{
                        apartments{
                            id
                            name
                        }
                    }
                `}).then((result) => { return result.data.name } )
            
            await console.log("La Data: ", temp1 )
            await this.setState({ Apartment: temp1 })
        }

        

        return(
            <div>
                <h1>Read Apartments from DB(Read Singers from DataBase)</h1>
                <button className="gralButton" onClick={ loadApartment } >Show Apartments(Get All Singers)</button>
                <br/><br/>

                { this.state.apartment[0] ? this.state.apartment.map((x) => { return <Template key={x.id} data={x} /> }) : <div>Click to get Apartments(Click to get singers)</div> }
            </div>
        )
    }
}


// Query Location: "Now your client is ready to start fetching data"
// https://www.apollographql.com/docs/react/essentials/get-started.html

// Query Location: " Enter the following query into the left Playground "
// https://www.prisma.io/docs/tutorials/prisma-basics/getting-started-ouzia3ahqu
