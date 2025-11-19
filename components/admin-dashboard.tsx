"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Eye, Mail, Phone, Building, Calendar } from "lucide-react"

interface ContactSubmission {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  country: string
  industry: string
  message: string
  optIn: boolean
  createdAt: Date
}

interface CvSubmission {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  jobType: string
  marketingConsent: boolean
  cvUrl: string | null
  createdAt: Date
}

interface RfpSubmission {
  id: string
  title: string
  firstName: string
  lastName: string
  position: string | null
  email: string
  phone: string | null
  country: string
  company: string | null
  industry: string
  revenue: string | null
  comments: string | null
  fileUrls: string[]
  createdAt: Date
}

interface AdminDashboardProps {
  submissions: {
    contactSubmissions: ContactSubmission[]
    cvSubmissions: CvSubmission[]
    rfpSubmissions: RfpSubmission[]
  }
}

export function AdminDashboard({ submissions }: AdminDashboardProps) {
  const [selectedTab, setSelectedTab] = useState("contact")

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date))
  }

  const downloadFile = (url: string, filename: string) => {
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    link.click()
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Forms</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{submissions.contactSubmissions.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CV Submissions</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{submissions.cvSubmissions.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">RFP Submissions</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{submissions.rfpSubmissions.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Submissions Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="contact">Contact Forms</TabsTrigger>
          <TabsTrigger value="cv">CV Submissions</TabsTrigger>
          <TabsTrigger value="rfp">RFP Submissions</TabsTrigger>
        </TabsList>

        {/* Contact Forms Tab */}
        <TabsContent value="contact" className="space-y-4">
          {submissions.contactSubmissions.map((submission) => (
            <Card key={submission.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">
                      {submission.firstName} {submission.lastName}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {submission.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {submission.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(submission.createdAt)}
                      </span>
                    </div>
                  </div>
                  {submission.optIn && <Badge variant="secondary">Marketing Opt-in</Badge>}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="font-medium">Company:</span> {submission.company}
                  </div>
                  <div>
                    <span className="font-medium">Industry:</span> {submission.industry}
                  </div>
                  <div>
                    <span className="font-medium">Country:</span> {submission.country}
                  </div>
                </div>
                <div>
                  <span className="font-medium">Message:</span>
                  <p className="mt-1 text-sm text-muted-foreground">{submission.message}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* CV Submissions Tab */}
        <TabsContent value="cv" className="space-y-4">
          {submissions.cvSubmissions.map((submission) => (
            <Card key={submission.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">
                      {submission.firstName} {submission.lastName}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {submission.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {submission.phoneNumber}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(submission.createdAt)}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {submission.marketingConsent && <Badge variant="secondary">Marketing Consent</Badge>}
                    <Badge>{submission.jobType}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {submission.cvUrl && (
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => window.open(submission.cvUrl!, "_blank")}>
                      <Eye className="h-4 w-4 mr-2" />
                      View CV
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        downloadFile(submission.cvUrl!, `CV-${submission.firstName}-${submission.lastName}.pdf`)
                      }
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download CV
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* RFP Submissions Tab */}
        <TabsContent value="rfp" className="space-y-4">
          {submissions.rfpSubmissions.map((submission) => (
            <Card key={submission.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{submission.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {submission.firstName} {submission.lastName}
                      {submission.position && ` - ${submission.position}`}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {submission.email}
                      </span>
                      {submission.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {submission.phone}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(submission.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {submission.company && (
                    <div>
                      <span className="font-medium">Company:</span> {submission.company}
                    </div>
                  )}
                  <div>
                    <span className="font-medium">Industry:</span> {submission.industry}
                  </div>
                  <div>
                    <span className="font-medium">Country:</span> {submission.country}
                  </div>
                  {submission.revenue && (
                    <div>
                      <span className="font-medium">Revenue:</span> {submission.revenue}
                    </div>
                  )}
                </div>

                {submission.comments && (
                  <div className="mb-4">
                    <span className="font-medium">Comments:</span>
                    <p className="mt-1 text-sm text-muted-foreground">{submission.comments}</p>
                  </div>
                )}

                {submission.fileUrls.length > 0 && (
                  <div>
                    <span className="font-medium">Attachments:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {submission.fileUrls.map((url, index) => (
                        <div key={index} className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => window.open(url, "_blank")}>
                            <Eye className="h-4 w-4 mr-2" />
                            View File {index + 1}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => downloadFile(url, `attachment-${index + 1}`)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
