from Agent import Agent

class PayrollSystem:
    def __init__(self, policies: list):
        self.policies = policies

    def calculate_bonus(self, agent: Agent):
        adjustment = sum(policy.apply(agent) for policy in self.policies)
        return agent.bonus + adjustment