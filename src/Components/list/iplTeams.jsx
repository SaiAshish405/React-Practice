import React from 'react'
import stylee from "./ipl.module.css"

const IplTeams = () => {
    const iplTeams=[
        {
            teamName:"RCB",
            captian:"Virat Kohli",
            titleWinners:0,
            players:["VK","ABD","Yuzi"],
            logo:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        },
        {
            teamName:"SRH",
            captian:"Pat Cummins",
            titleWinners:2,
            players:["Pat Cummins","Nithish Kumar","David  Warner"],
            logo:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"

        },
        {
            teamName:"MI",
            captian:"Rohit Sharma",
            titleWinners:5,
            players:["Rohit Sharma","Tilak Varma","Sachin"],
            logo:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"

        }
    ]
    function FilterTeams(iplTeams){
        const filterData=iplTeams.filter(eachteam=>eachteam.titleWinners>=2)
        return filterData
    }
    function Recucer(iplTeams){
        const totalMatches=iplTeams.reduce((acc,eachTeam)=>{
            return acc+eachTeam.titleWinners
        },0)
        return  totalMatches
    }
  return (
    <div className={stylee.iplT}>
        <h2>total no of matches {Recucer(iplTeams)}</h2>
      {
        FilterTeams(iplTeams).map((EachTeam)=>{
                return(
                    <>
                   
                     <h1>{EachTeam.teamName}</h1>
                     <img src={EachTeam.logo} width={100} alt=''/>
                    <h3>{EachTeam.captian}</h3>
                    <h4>{EachTeam.titleWinners}</h4>

                    {
                        EachTeam.players.map((eachPlayeer)=>{
                            return(
                                <>
                                    <h2>{eachPlayeer}</h2>
                                </>
                            )
                        })
                    }
                    </>
                )
        })
      }
    </div>
  )
}

export default IplTeams
