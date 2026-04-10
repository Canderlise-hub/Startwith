import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from "@/components/ui/dialog";

export function TermsOfServiceDialog({ children }: { children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Terms of Service</DialogTitle>
                    <DialogDescription>
                        Last updated: February 2026
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 text-sm text-foreground/90 mt-4 pb-6">
                    <section className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h3>
                        <p>
                            By accessing and using the Startwith website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">2. Intellectual Property Rights</h3>
                        <p>
                            The Site and its original content, features, and functionality are owned by Startwith and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">3. User Obligations</h3>
                        <p>
                            As a user of the Site or Services, you agree not to:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                            <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email.</li>
                            <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">4. Termination</h3>
                        <p>
                            We may terminate your access to the Site, without cause or notice, which may result in the forfeiture and destruction of all information associated with you. All provisions of this Agreement that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">5. Governing Law</h3>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Startwith operates, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">6. Contact Us</h3>
                        <p>
                            If you have any questions about these Terms, please contact us at: <a href="mailto:legal@startwith.com" className="text-primary hover:underline">legal@startwith.com</a>.
                        </p>
                    </section>
                </div>
            </DialogContent>
        </Dialog>
    );
}
