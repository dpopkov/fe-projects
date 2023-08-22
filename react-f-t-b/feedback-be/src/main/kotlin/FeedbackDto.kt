package learn.reactftb.feedback_be

data class FeedbackDto(
    var id: String,
    var rating: Int,
    var text: String
)