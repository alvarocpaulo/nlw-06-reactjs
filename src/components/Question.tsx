type QuestionProps = {
    content: string
    author: {
        name: string,
        avatar: string
    }
}

export function Question(props: QuestionProps) {
    return (
        <div className="question">
            <p>
            {props.content}</p>
            <footer>
                <div className="user-info">
                    <img src={props.author.avatar} alt={props.author.name} />
                </div>
                <div>

                </div>
            </footer>
        </div>
    );
}