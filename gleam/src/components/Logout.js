export default function Logout(){
    localStorage.removeItem("token")
    return(
        <div>
            <center><h1>You had logged out successfully</h1></center>
        </div>
    )
}