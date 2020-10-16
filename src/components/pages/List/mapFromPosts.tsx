import React from 'react'
import Card from '../../util/Card'

export function mapFromPosts(posts: any) {
    return posts.map((post: any) => {
        // Character Per Minuite Reading Time
        const time = Math.floor(post.length! / 1250)
        return (
            <Card
                key={post.id}
                title={
                    post.title.length > 48
                        ? post.title.substring(0, 48) + '...'
                        : post.title
                }
                badge={time ? `${time} min` : undefined}
                link={`/stories/${post.id}`}
                postData={post}
            />
        )
    })}
