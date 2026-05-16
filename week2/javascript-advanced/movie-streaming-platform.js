/*ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


//Tasks:
    //1. filter() only "Sci-Fi" movies
    const ele = movies.filter(obj=>(obj.genre == "Sci-Fi"))
    console.log(ele);
    /*2. map() to return:
            "Inception (8.8)"*/
         const rating=movies.map(movie=>{
    return `${movie.title} (${movie.rating})`
         })
console.log(rating)

    //3. reduce() to find average movie rating
    const total = movies.reduce((acc,ele)=>(acc+ele.rating),0)
        const avg = total/movies.length;
        console.log(avg);

    //4. find() movie "Joker"
    const search = movies.find(movie=>(movie.title == "Joker"))
    console.log(search);
    //5. findIndex() of "Avengers"
    const index = movies.findIndex(movie =>(movie.title == "Avengers"))
    console.log(index);