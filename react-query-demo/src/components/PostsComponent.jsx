import { useQuery } from 'react-query';

// Define a fetch function that can be used to fetch data from an API
const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    // Use the useQuery hook to handle data fetching and caching
    const { data, error, isLoading,refetch, isError } = useQuery('fetchPosts', fetchData, {cacheTime: 5*60*1000, staleTime: 10*1000, refetchOnWindowFocus:true, keepPreviousData:true});

    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (isError) return <div>Error loading data</div>;

    // Render the fetched data
    return (

        <div>
            <h1>Post</h1>
            <button onClick={() => refetch()}>Refetch</button>
            {data.map(post => (
                <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
            ))}
        </div>
    );
};

export default PostsComponent;