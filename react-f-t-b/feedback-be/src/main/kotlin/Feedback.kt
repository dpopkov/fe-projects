package learn.reactftb.feedback_be

import jakarta.persistence.Entity
import jakarta.persistence.Id

@Entity
class Feedback (
    @Id
    var id: String,
    var rating: Int,
    var text: String,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false
        other as Feedback
        if (id != other.id) return false
        if (rating != other.rating) return false
        if (text != other.text) return false
        return true
    }

    override fun hashCode(): Int {
        var result = id.hashCode()
        result = 31 * rating.hashCode()
        result = 31 * text.hashCode()
        return result
    }

    override fun toString(): String {
        return "Feedback(id=$id, rating=$rating, text=$text)"
    }
}
