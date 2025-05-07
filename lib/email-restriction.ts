const supabaseUrl = process.env.SUPABASE_URL!
interface EmailSubmission {
    email: string
    timestamp: number
    jobType: string
  }
  
  /**
   * Check if an email is restricted from submitting again
   * @param email The email to check
   * @returns Object with restriction status and days left
   */
  export function checkEmailRestriction(email: string): {
    restricted: boolean
    hoursLeft: number
    jobType?: string
  } {
    try {
      const storedSubmissions = localStorage.getItem("email_submissions")
      if (!storedSubmissions) return { restricted: false, hoursLeft: 0 }
  
      const submissions: EmailSubmission[] = JSON.parse(storedSubmissions)
      const emailSubmission = submissions.find((sub) => sub.email.toLowerCase() === email.toLowerCase())
  
      if (!emailSubmission) return { restricted: false, hoursLeft: 0 }
  
      const now = Date.now()
      const submissionTime = emailSubmission.timestamp
      const oneDayInMs = 24 * 60 * 60 * 1000
      const timeDiff = now - submissionTime
  
      if (timeDiff < oneDayInMs) {
        const hoursLeft = Math.ceil((oneDayInMs - timeDiff) / (60 * 60 * 1000))
        return { restricted: true, hoursLeft, jobType: emailSubmission.jobType }
      }
  
      return { restricted: false, hoursLeft: 0 }
    } catch (error) {
      console.error("Error checking email restriction:", error)
      return { restricted: false, hoursLeft: 0 }
    }
  }
  
  /**
   * Save email submission to localStorage
   * @param email The email that submitted
   * @param jobType The job type they applied for
   */
  export function saveEmailSubmission(email: string, jobType: string) {
    try {
      const storedSubmissions = localStorage.getItem("email_submissions")
      let submissions: EmailSubmission[] = storedSubmissions ? JSON.parse(storedSubmissions) : []
  
      // Remove any existing entry for this email
      submissions = submissions.filter((sub) => sub.email.toLowerCase() !== email.toLowerCase())
  
      // Add new submission
      submissions.push({
        email,
        timestamp: Date.now(),
        jobType,
      })
  
      localStorage.setItem("email_submissions", JSON.stringify(submissions))
    } catch (error) {
      console.error("Error saving email submission:", error)
    }
  }
  
  /**
   * Format the next application date/time
   * @param hoursLeft Hours left until next application is allowed
   * @returns Formatted date/time string
   */
  export function formatNextApplicationTime(hoursLeft: number): string {
    if (hoursLeft < 24) {
      return `in ${hoursLeft} hour${hoursLeft === 1 ? "" : "s"}`
    }
  
    const date = new Date()
    date.setHours(date.getHours() + hoursLeft)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }
