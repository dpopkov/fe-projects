package learn.reactftb.feedback_be

import org.slf4j.LoggerFactory
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("feedback")
class FeedbackController(
    private val feedbackRepository: FeedbackRepository
) {
    private val log = LoggerFactory.getLogger(this::class.java)

    @GetMapping
    fun getFeedbacks(@RequestParam("sleep") sleep: Long?): ResponseEntity<List<Feedback?>?> {
        if (sleep !== null) {
            log.info("Wait ${sleep / 1000} seconds before getting all feedbacks...")
            Thread.sleep(sleep)
        }
        log.info("Get all feedbacks")
        var list = feedbackRepository.findAll().toList()
        return ResponseEntity.ok(list)
    }

    @GetMapping("/{id}")
    fun getFeedbackById(@PathVariable("id") id: String): ResponseEntity<Feedback?> {
        log.info("Get by id=$id")
        val found = feedbackRepository.findById(id)
        return if (found.isPresent) {
            ResponseEntity.ok(found.get())
        } else {
            ResponseEntity.notFound().build<Feedback?>()
        }
    }

    @PostMapping
    fun createFeedback(@RequestBody feedbackDto: FeedbackDto): ResponseEntity<Feedback?> {
        log.info("Saving $feedbackDto")
        var feedback = Feedback(id = feedbackDto.id, rating = feedbackDto.rating, text = feedbackDto.text);
        val saved = feedbackRepository.save<Feedback>(feedback);
        return ResponseEntity.ok(saved)
    }

    @PutMapping("/{id}")
    fun updateFeedback(@PathVariable("id") id: String, @RequestBody feedbackDto: FeedbackDto): Any {
        log.info("Updating by id=$id")
        val found = feedbackRepository.findById(id)
        if (found.isPresent) {
            val feedback = found.get()
            feedback.rating = feedbackDto.rating
            feedback.text = feedbackDto.text
            val saved = feedbackRepository.save<Feedback>(feedback)
            return ResponseEntity.ok(saved)
        }  else {
            log.info("Not found to update by id=$id")
            return ResponseEntity.notFound().build<Feedback?>()
        }
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") id: String): ResponseEntity<Feedback?> {
        log.info("Deleting by id=$id")
        val found = feedbackRepository.findById(id)
        if (found.isPresent) {
            feedbackRepository.deleteById(id)
            return ResponseEntity.of(found)
        } else {
            log.info("Not found to delete by id=$id")
            return ResponseEntity.notFound().build<Feedback?>()
        }
    }
}
