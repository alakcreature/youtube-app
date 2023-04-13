import Button from "./Button"

const list = ["All", "Comedy", "Live", "Movies", "News", "Songs", "Tollywood", "Lecture", "Soccer"];

function ButtonList() {

  return (
    <div className="flex">
      {
        list.map((element, ind)=>{
          return <Button key={ind} name={element} />
        })
      }
      </div>
  )
}

export default ButtonList