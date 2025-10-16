"use client"
import { useEffect, useState } from "react";
import { InstagramEmbed, FacebookEmbed } from "react-social-media-embed"

export default function Posts() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            <h1>Posts</h1>
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNela9891%2Fposts%2Fpfbid026vnaDq5JfXAKVwpdDWQtmLnmN6oC5Hoetcmd4RhghuXNrexXEzEoU46Rggo6kawSl&show_text=true&width=500" width="500" height="185" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </>
    );
}