const Form = () => {
    return (
        <>
            <h1>Feedback Form</h1>
            <form id="feedbackForm">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required /><br />

                <label htmlFor="rating">Rating:</label>
                <select id="rating" name="rating">
                    <option value="5">Excellent</option>
                    <option value="4">Very Good</option>
                    <option value="3">Good</option>
                    <option value="2">Fair</option>
                    <option value="1">Poor</option>
                </select><br />

                <label htmlFor="comments">Comments:</label><br />
                <textarea id="comments" name="comments" rows="4" cols="50" required></textarea><br />

                <button type="submit" data-qa="submitBtn">Submit</button>
            </form>
        </>
    );
}

export default Form;
