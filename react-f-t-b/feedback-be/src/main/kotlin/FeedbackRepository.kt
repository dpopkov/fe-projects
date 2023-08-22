package learn.reactftb.feedback_be

import org.springframework.data.repository.CrudRepository

interface FeedbackRepository : CrudRepository<Feedback, String>
