import Skeleton, { SkeletonTheme } from "react-loading-skeleton"; 
import "./styles.css"
export default function SkaletonComponent() {
  return (
    <SkeletonTheme baseColor="#f7f2f2" highlightColor="#f0e4e4">
      <div className="skaletopn-component" role="skaleton-container">
      <Skeleton width={"100%"} height={"200px"} />     
       <div className="cards">
          <Skeleton  height={"100px"} className="card-item spancin-card"  />
          <Skeleton  height={"100px"} className="card-item " />
          <Skeleton  height={"100px"} className="card-item spancin-card" />
          <Skeleton  height={"100px"} className="card-item"/>
        </div> 
      </div>
    
    </SkeletonTheme>
  );
}
