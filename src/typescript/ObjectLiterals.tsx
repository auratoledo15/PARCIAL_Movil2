
interface Person{
    fullName: string,
    age: number,
    isAlive?: boolean;
  }
  
  interface address{
    country: string;
    houseNo: number;
  }
  
  export const ObjectLiterals = () => {
      const person: Person = {
          fullName: 'Aura Toledo',
          age: 21,
          //address: {
           //   country: 'Colombia',
           //   houseNo: 615
          //}
      }
    return (
      <>
      <h1>Objeto Literal</h1>
      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
      </>
    )
  }
  export default ObjectLiterals;