from AgentRepository import AgentRepository
from PerformancePolicy import PerformancePolicy
from RegionalPolicy import RegionalPolicy
from PenaltyPolicy import PenaltyPolicy
from PayrollSystem import PayrollSystem

def main():
    agent_repository = AgentRepository()
    agents = agent_repository.get_agents('Python/agents.csv')
    payroll_system = PayrollSystem([
        PerformancePolicy,
        RegionalPolicy
        PenaltyPolicy
    ])
    for agent in agents:
        final_bonus = payroll_system.calculate_bonus(agent)
        print(f"{agent.name}: {final_bonus}")

main()