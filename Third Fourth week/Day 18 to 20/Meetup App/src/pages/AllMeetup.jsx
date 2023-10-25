import AllMeetuplist from "../components/AllMeetup/AllMeetuplist";

const data = [
  {
    id: 1,
    title: "Defense the travel audience hand",  
    description: "Leader structure safe or black late wife newspaper her pick central forget single likely.",
    image: "https://api.slingacademy.com/public/sample-photos/1.jpeg"
  },
  {
    id: 2,
    title: "Space build policy people model treatment town hard use",  
    description: "Leader structure safe or black late wife newspaper her pick central forget single likely.",
    image: "https://api.slingacademy.com/public/sample-photos/2.jpeg"
  },
  {
    id: 3,
    title: "Party about different guess bill too owner",  
    description: "World early north TV around meet goal across reason responsibility have must build up some language soon.",
    image: "https://api.slingacademy.com/public/sample-photos/3.jpeg"
  },
  {
    id: 4,
    title: "Defense the travel audience hand",  
    description: "Leader structure safe or black late wife newspaper her pick central forget single likely.",
    image: "https://api.slingacademy.com/public/sample-photos/4.jpeg"
  },
]

function AllMeetup() {
  return (
  <>
    <div className="container">
     <h1 className="heading">All Meetup</h1>
     <div><AllMeetuplist  meetups = {data} /></div>
    </div>
  </>
  );
}
export default AllMeetup;
