import './Home.css';

export default function Home(){
    return(
        <div>
            <div className="body">
                <div className="banner">
                    <div className="left-column">
                        <h1>Team 8</h1>
                        <p>We are Team 8, Mirvari, Aliya, Aghabayim, and we are introducing you our Movie Page!</p>
                        <br /> <br />
        

                        <h1>Projects</h1>
                        <ol>
                            <li>Personal Web Page & Digital Card - the goal of this assignment was to perform how much we have mastered HTML & CSS. There was created the web page, oriented on our personal preferences (our personal and contact, hobbies and etc). Additionally, we have provided the site with Digital Card</li><br/>
                            <li>Weather App - in this assignment we have performed our JavaScript skills with some additional features, like usage of API and so on.</li> <br/>
                            <li>Movie Rating App - our last assignment, which is mainly React-oriented.</li> <br/>
                        </ol>
                        <h3>To visit our personal Github web sites, click buttons below:</h3>
                        <form>
                            <button class="button" formaction="https://mirvaricomps.github.io/website.github.io/">Mirvari</button>
                            <button class="button" formaction="https://aliyahuseynova.github.io/">Aliya</button>
                            <button class="button" formaction="https://aghabayim.github.io">Aghabayim</button>
                        </form>
                    </div>
                    <div className="right-column">
                        <img className ="homeimg" src="https://store.hp.com/app/assets/images/uploads/prod/best-laptops-for-working-from-home-hero1570812274803636.jpg" alt='images' />
                    </div>
                </div>
            </div>
        </div>
    );
}