import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Briefcase, HelpCircle, MessageSquare, Users } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import React from "react";
import {
  getPortfolioCounts,
  getRecentProjects,
  getRecentTestimonials,
} from "@/lib/dal";
import { auth } from "@/auth";
import { FormModal } from "@/components/auth/form-modal";
import { ProjectForm } from "@/components/auth/project-form";
import { TestimonialForm } from "@/components/auth/testimonial-form";
import { FaqForm } from "@/components/auth/faq-form";
import { ClientForm } from "@/components/auth/client-form";

const AdminDashboardPage = async () => {
  const session = await auth();

  const userId = session?.user.id;

  if (!session?.user?.id) {
    return <div>Not authenticated</div>;
  }
  const portfolioCounts = await getPortfolioCounts(userId);

  if (!portfolioCounts) {
    return <div>Failed to load portfolio data</div>;
  }

  const [recentProjects, recentTestimonials] = await Promise.all([
    getRecentProjects(),
    getRecentTestimonials(userId),
  ]);

  const { projects, testimonials, faqs, clients } = portfolioCounts;
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
            <Briefcase className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projects}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
            <MessageSquare className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{testimonials}</div>
            <p className="text-xs text-muted-foreground">+5 in last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">FAQs</CardTitle>
            <HelpCircle className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{faqs}</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Clients</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clients}</div>
            <p className="text-xs text-muted-foreground">Active partnerships</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Projects</h2>
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentProjects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>
                    {format(project.createdAt, "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell>
                    {format(project.updatedAt, "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/admin/projects/${project.id}`}>Edit</Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Recent Testimonials Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Testimonials</h2>
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTestimonials.map((testimonial) => (
                <TableRow key={testimonial.id}>
                  <TableCell className="font-medium">
                    {testimonial.name}
                  </TableCell>
                  <TableCell>{testimonial.company}</TableCell>
                  <TableCell>
                    {format(testimonial.createdAt, "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/testimonials/${testimonial.id}`}>
                        Edit
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modals */}
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* add projects */}
          <Card>
            <CardContent className="p-6">
              <FormModal title="Add New Project" triggerText="Add Project">
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="w-full max-w-md">
                    <ProjectForm userId={userId} />
                  </div>
                </div>
              </FormModal>
            </CardContent>
          </Card>

          {/* add testimonias */}
          <Card>
            <CardContent className="p-6">
              <FormModal
                title="Add New Testimonial"
                triggerText="Add Testimonial"
              >
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="w-full max-w-md">
                    <TestimonialForm userId={userId} />
                  </div>
                </div>
              </FormModal>
            </CardContent>
          </Card>

          {/* add faqs */}
          <Card>
            <CardContent className="p-6">
              <FormModal title="Add New FAQ" triggerText="Add FAQ">
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="w-full max-w-md">
                    <FaqForm userId={userId} />
                  </div>
                </div>
              </FormModal>
            </CardContent>
          </Card>

          {/* add clients */}
          <Card>
            <CardContent className="p-6">
              <FormModal title="Add New Client" triggerText="Add Client">
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="w-full max-w-md">
                    <ClientForm userId={userId} />
                  </div>
                </div>
              </FormModal>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
