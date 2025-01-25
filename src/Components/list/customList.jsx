const CustomList = (prop) => {
  const { list } = prop;
  return (
    <>
      <ol>
        {list.map((eachList) => {
          return <li>{eachList}</li>;
        })}
      </ol>
      {/* <ul>
                {

                    list.map((eachList)=>{
                        return(
                            <li>{eachList}</li>
                        )
                    })
                }
            </ul> */}
    </>
  );
};
export default CustomList;
